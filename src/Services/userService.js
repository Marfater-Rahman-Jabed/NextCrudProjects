// const { axioshttp } = require("@/helper/httpHelper")

export const adduser = async (data) => {

    const result = await fetch(`http://localhost:3000/api/User`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return result.json();

    // const result = await axioshttp.post('/api/User', data)
    //     .then(res => res.data)
    // return result
}
export const deleteuser = async (data) => {
    const result = await fetch(`http://localhost:3000/api/User/${data}`, {
        method: 'DELETE'
    })
    return result.json();
}
export const updateuser = async (data) => {
    const result = await fetch(`http://localhost:3000/api/User/${data}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return result.json();
}
export const getuser = async () => {

    const result = await fetch('http://localhost:3000/api/User', { next: { revalidate: 1 } })
    return result.json();
}