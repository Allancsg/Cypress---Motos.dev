export function generatePhone() {
    const ddd = Math.floor(Math.random() * 9) + 11;
    const phoneNumber = Math.floor(Math.random() * 90000000) + 10000000;
    return `${ddd}9${phoneNumber}`
}

export function generateCep(){
    const cep = Math.floor(Math.random() * 90000000) + 10000000;
    return `${cep}` 
}