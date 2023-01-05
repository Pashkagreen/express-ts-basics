class Coord {
  message: "1";
  lat: number;
  long: number;

  //protected method is available in extended class, not in instance class
  protected test() {
    if (this.lat > 0) {
    }
  }

  computeDistance(newLat: number, newLong: number): number {
    return 0;
  }

  constructor(lat: number, long: number) {
    this.lat = lat;
    this.long = long;
    console.log(this.message);
  }
}

const point = new Coord(0, 1);

class mapLocation extends Coord {
  _name: string;

  get name() {
    return this._name;
  }

  set name(s: string) {
    this._name = s + "_cool";
  }

  //override parent class
  override computeDistance(newLat: number, newLong: number): number {
    return 1;
  }

  constructor(lat: number, long: number, name: string) {
    super(lat, long);
  }
}

interface LoggerService {
  logger: (s: string) => void;
}

class Logger implements LoggerService {
  public logger(s: string) {
    console.log(s);
  }

  //available only in this class
  private error() {}
}

const l = new Logger();
l.logger("d");

class myClass<T> {
  a: T;
}

const b = new myClass<string>();
b.a;

//cannot create instance, only extends
abstract class Base {
  print(s: string) {
    console.log(s);
  }
}

class ExtendedBase extends Base {}
