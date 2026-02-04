"use server"

export async function loginAction(formData:FormData)
{
    const username = formData.get("username");

    if(!username)
    {
        throw new Error("Username is required.");
    }

    return{
        name:username.toString();
    }
}