const three = require('three');
// const RenderWebGL = require('original-render');

class RenderWebGL {
	constructor (canvas, xLeft, xRight, yBottom, yTop) {
		this._allSkins = [];
		this._allDrawables = [];

		this._xLeft = xLeft || -240;
		this._xRight = xRight || 240;
		this._yTop = yTop || -180;
		this._yBottom = yBottom || 180;

		canvas.width = this._xRight - this._xLeft;
		canvas.height = this._yBottom - this._yTop;

		this._scene = new three.Scene();
		this._scene.background = new three.Color(1, 1, 1);
		this._gl = new three.WebGLRenderer({canvas: canvas});
		this._objectLoader = new three.ObjectLoader();

		this._camera = new three.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
		this._camera.position.set(
			(this._xLeft + this._xRight) / 2,
			(this._yBottom + this._yTop) / 2,
			this.getNativeSize()[1] / 2 / Math.tan(this._camera.fov * Math.PI / 180 / 2)
		);

		const lights = this._lights = [
			new three.DirectionalLight(),   // Light from above
			new three.AmbientLight(),	   // Baseline light everywhere
			new three.PointLight()		  // Light at the camera position
		];

		const intensities = [.4, .4, .3];

		lights.forEach(function (light, i) {
			light.intensity = intensities[i];
			this._scene.add(light);
		}, this);

		this._cameraLight = lights[2];
		this._cameraLight.position.copy(this._camera.position);
	}

	_createSkin (skin) {
		this._allSkins.push(skin);
		return this._allSkins.length - 1;
	}

	createBitmapSkin () {
		return this._createSkin({});
	}

	createSVGSkin () {
		return this._createSkin({});
	}

	create3DSkin (objectData) {
		return this._createSkin(objectData !== undefined ? this._objectLoader.parse(objectData) : {});
	}

	createPenSkin () {
		return this._createSkin(new three.Group());
	}

	destroySkin (skinId) {
		delete this._allSkins[skinId];
	}

	createDrawable () {
		const drawable = new three.Object3D();
		this._scene.add(drawable);
		this._allDrawables.push(drawable);
		return this._allDrawables.length - 1;
	}

	destroyDrawable (drawableId) {
		const drawable = this._allDrawables[drawableId];
		this._scene.remove(drawable);
		delete this._allDrawables[drawableId];
	}

	setDrawableOrder () {}

	draw () {
		this._gl.render(this._scene, this._camera);
	}

	getBounds () {}
	getSkinSize () {}
	isTouchingColor () {}
	isTouchingDrawables () {}
	pick () {}
	extractDrawable () {}

	updateDrawableProperties (drawableId, properties) {
		const drawable = this._allDrawables[drawableId];
		if (!drawable) return;
		if ('skinId' in properties) {
			const skin = this._allSkins[properties.skinId]
			if (skin instanceof three.Object3D) drawable.children = [skin];
		}
		if ('position' in properties) {
			drawable.position.fromArray(properties.position);
		}
		if ('rotation' in properties) {
			drawable.rotation.fromArray(properties.rotation.map(three.Math.degToRad));
		}
		if ('scale' in properties) {
			drawable.scale.set(properties.scale, properties.scale, properties)
		}
		if ('visible' in properties) {
			drawable.visible = properties.visible;
		}
	}

	getFencedPositionOfDrawable (drawableId, position) {
		return position;
	}

	set cameraPosition (newPosition) {
		let camera = this._camera;
		camera.position.fromArray(newPosition);
		this._cameraLight.position.copy(camera.position);

		camera.lookAt(new three.Vector3());
	}

	get cameraPosition () {
		return this._camera.position.toArray();
	}

	rotateCameraHorizontal(degrees) {
		const s = new three.Spherical().setFromVector3(this._camera.position);
		s.theta += three.Math.degToRad(degrees);
		this._camera.position.setFromSpherical(s);
		this.cameraPosition = this.cameraPosition;
	}

	rotateCameraVertical(degrees) {
		const s = new three.Spherical().setFromVector3(this._camera.position);
		s.phi += three.Math.degToRad(degrees);
		s.makeSafe();
		this._camera.position.setFromSpherical(s);
		this.cameraPosition = this.cameraPosition;
	}

	penClear (penSkinId) {
		this._allSkins[penSkinId].children = [];
	}

	static _getPenMaterial (colorArray) {
		let color = new three.Color();
		color.fromArray(colorArray);
		return new three.MeshLambertMaterial({color: color});
	}

	static _createObjectFromGeometry (geometry, position, rotation, color) {
		let object = new three.Mesh(geometry, RenderWebGL._getPenMaterial(color));
		object.position.fromArray(position);
		object.rotation.fromArray(rotation.map(three.Math.degToRad));

		return object;
	}

	penPoint (penSkinID, penAttributes, position) {
		this.penSphere(penSkinID, penAttributes, penAttributes.diameter / 2, position)
	}

	penLine (penSkinID, penAttributes, oldPosition, newPosition) {
		const start = new three.Vector3().fromArray(oldPosition);
		const end = new three.Vector3().fromArray(newPosition);
		const radius = penAttributes.diameter / 2;
		const height = start.distanceTo(end);
		let geometry = new three.CylinderBufferGeometry(radius, radius, height);
		geometry.translate(0, height / 2, 0);
		geometry.rotateX(Math.PI / 2);

		let object = new three.Mesh(geometry, RenderWebGL._getPenMaterial(penAttributes.color));
		object.position.copy(start);
		object.lookAt(end);

		this._allSkins[penSkinID].add(object);
	}

	penStamp (penSkinID, stampID) {
		const stampDrawable = this._allDrawables[stampID];
		if (!stampDrawable) return;
		this._allSkins[penSkinID].add(stampDrawable.clone());
	}

	penSphere (penSkinID, penAttributes, radius, position) {
		this._allSkins[penSkinID].add(RenderWebGL._createObjectFromGeometry(
			new three.SphereBufferGeometry(radius),
			position,
			[0, 0, 0],
			penAttributes.color
		));
	}

	penCube (penSkinID, penAttributes, position) {
		this._allSkins[penSkinID].add(RenderWebGL._createObjectFromGeometry(
			new three.BoxBufferGeometry(...dimensions),
			position,
			rotation,
			penAttributes.color
		));
	}

	penArc (penSkinID, penAttributes, dimensions, position, rotation) {
		const curve = new three.Curve();
		curve.getPoint =  t => new three.Vector3(
			Math.cos(t * Math.PI) * dimensions[0],
			Math.sin(t * Math.PI) * dimensions[1],
			0
		);
		this._allSkins[penSkinID].add(RenderWebGL._createObjectFromGeometry(
			new three.TubeBufferGeometry(curve, null, penAttributes.diameter / 2),
			position,
			rotation,
			penAttributes.color
		));
	}

	getNativeSize () {
		const element = this._gl.domElement;
		return [element.width, element.height];
	}
}

module.exports = RenderWebGL;
