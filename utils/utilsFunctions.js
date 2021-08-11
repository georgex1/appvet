export const ObjToArray = (data) => {
    const items = [];
    // Convertir el objeto a un arreglo
    Object.keys(data).forEach(key => items.push({ id: key, ...data[key] }));
    return items;
    // Filtrar el arreglo (solo las ordenes del usuario)
    // return items.filter(item => item.user === user);
}