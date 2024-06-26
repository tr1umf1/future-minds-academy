let circle = {
    radius: 3,
    center: {
      x: 2,
      y: 3,
    },

    getRadius: function () {
      return this.radius;
    },
    setRadius: function (radius) {
      this.radius = radius;
    },
    getArea: function () {
      return this.radius ** 2 * Math.PI;
    },
    getPerimeter: function () {
      return this.radius * 2 * Math.PI;
    },
    getCenter: function () {
      return this.center;
    },
    setCenter: function (center) {
      this.center = center;
    },
    grow: function (number) {
      this.radius + number;
    },
    shrink: function (number) {
      this.radius - number;
    },
    printDetails: function () {
      console.log(`This circles radius is = ${this.radius}.`);
    },
    equals: function (otherCircle) {
      if (!otherCircle) {
        console.error("Invalid circle object provided.");
        return false;
      }

      return (
        this.radius == otherCircle.radius &&
        this.center.x == otherCircle.center.x &&
        this.center.y == otherCircle.center.y
      );
    },
  };

  let otherCircle = {
    radius: 5,
    center: { x: 0, y: 0 },
  };

  circle.printDetails();
  console.log(circle.equals(otherCircle));