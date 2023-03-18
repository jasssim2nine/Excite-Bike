var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Tracks = (function (_super) {
        __extends(Tracks, _super);
        //CONSTRUCTOR++++++++++
        function Tracks() {
            _super.call(this, assetLoader.getResult("tracks"));
            //PRIVATE VARIABLE
            this._dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._reset();
        }
        //private methods
        Tracks.prototype._reset = function () {
            //set the island to start at random x
            this.y = 0;
            this.x = -313;
        };
        //check bounds
        Tracks.prototype._checkBounds = function () {
            if (this.x >= 0) {
                this._reset();
            }
        };
        //public methods
        Tracks.prototype.update = function () {
            this.x += this._dx;
            this._checkBounds();
        };
        return Tracks;
    }(createjs.Bitmap));
    objects.Tracks = Tracks;
})(objects || (objects = {}));
