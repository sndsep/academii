const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var mongodb_1 = require("../src/lib/mongodb");
var bcrypt = require("bcryptjs");
var mongodb_2 = require("mongodb");

// Eliminamos la declaración redundante de 'uri' y 'client'
// ya que estas variables ya están definidas en el ámbito global

async function conectarABaseDeDatos() {
  try {
    await client.connect();
    console.log("Conectado exitosamente a MongoDB");
    // Resto de tu lógica aquí
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  } finally {
    await client.close();
  }
}

connectToDatabase();

function updatePassword() {
    return __awaiter(this, void 0, void 0, function () {
        var db, userId, plainPassword, hashedPassword, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    console.log("URI de conexión:", process.env.MONGODB_URI); // Asegúrate de que esto no sea undefined
                    console.log("MONGODB_URI:", process.env.MONGODB_URI);
                    const client = new MongoClient(process.env.MONGODB_URI);
                    return [4 /*yield*/, (0, mongodb_1.connectToDatabase)()];
                case 1:
                    db = (_a.sent()).db;
                    userId = '66f2dbf66c31ff1c96d821f9';
                    plainPassword = 'williams';
                    return [4 /*yield*/, bcrypt.hash(plainPassword, 10)];
                case 2:
                    hashedPassword = _a.sent();
                    return [4 /*yield*/, db.collection('users').updateOne(
                        { _id: new mongodb_2.ObjectId(userId) },
                        { $set: { password: hashedPassword } }
                    )];
                case 3:
                    result = _a.sent();
                    if (result.modifiedCount === 1) {
                        console.log('Contraseña actualizada exitosamente');
                    }
                    else {
                        console.log('No se pudo actualizar la contraseña');
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error al actualizar la contraseña:', error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
updatePassword();
