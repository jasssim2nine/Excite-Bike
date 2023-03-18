module objects {
	export class Tracks extends createjs.Bitmap {
		//PUBLIC INSTANCES
		public width;
		public height;
		//PRIVATE VARIABLE
		private _dx = 5;

		//CONSTRUCTOR++++++++++
		constructor() {
			super(assetLoader.getResult("tracks"));

			this.width = this.getBounds().width;
			this.height = this.getBounds().height;


			this._reset();
		}
		//private methods
		private _reset() {
			//set the island to start at random x
			this.y = 0;
			this.x = -313;
		}

		//check bounds
		private _checkBounds() {
			if (this.x >= 0) {
				this._reset();
			}
		}

		//public methods
		public update() {
			this.x += this._dx;

			this._checkBounds();

		}


	}
	}

