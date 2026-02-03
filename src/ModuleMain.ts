import { Module1 as Modulo } from "./modules/Module1";
import { MyClass1, MyClass2 as B } from "./modules/MultiplesModules";
import DefaultClass, { NotDefaultClass } from "./modules/DefaultModule";
// import * as React from "react";

const module1 = new Modulo()
module1.print()

const test = new DefaultClass()
