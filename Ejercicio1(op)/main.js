"use strict"
import { calcularIMC, compararIMC } from "./biblioteca/calculadoraIMC.js";

let masaMarcos = 90;
let alturaMarcos = 180;
let masaJuan = 72;
let alturaJuan = 187;
let IMCMarcos = (calcularIMC(masaMarcos, alturaMarcos));
let IMCJuan = (calcularIMC(masaJuan, alturaJuan));
let MarcosIMCMayorJuan = compararIMC(IMCMarcos, IMCJuan);

console.log(`¿Tiene Marcos un IMC mayor que el de Juan?: ${MarcosIMCMayorJuan}`);