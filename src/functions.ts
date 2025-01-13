import { SayHelloProps } from "./types";

export function sayHello({ firstName, lastName, age }: SayHelloProps) {
    console.log(`Hello ${firstName} ${lastName}, do tyou confirm you are ${age}?`);
}