const BASE_URL = 'https://api.openf1.org/v1';


//obtenemos los pilotos de la ultima sesion disponible
export async function fetchDrivers(){
    try {
        const response = await fetch('${BASE_URL}/drivers?session_key=latest');
        if(!response.ok) throw new Error('Error al conectar con OpenF1');
        const data = await response.json();
        return data;
    }
    catch (error){
        console.warn('Usando datos locales de respaldo para piloros :', error);
        return null;
    }
}
//obtenemos lasreuniones grandes premios/ circuitos de la season actual

export async function fetchMeeting(year=2026){
    try {
        const response = await fetch('${BASE_URL}/meetings?year=${year}');
        if (!response.ok) throw new Error('Error al obtener los circuitos/reuniones');
        const data = await response.json();
        return data;
    } catch (error){
        console.warn('Usando datos locales de respaldo para circuitos:', error);
        return null;
    }
}