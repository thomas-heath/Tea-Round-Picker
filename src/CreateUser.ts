export default async function CreateUser(firstName: string, lastName: string): Promise<string> {
    const createUserBody = {
      firstName: firstName,
      lastName: lastName
    }
  
    const response = await fetch(`/api/v1/Users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(createUserBody)      
    })
  
    const data = await response.json()
    if (response.ok) {
      const userID = data?.id
      if (userID) {
        return userID
      } else {
        return Promise.reject(new Error())
      }
    } else {
      return Promise.reject(new Error())
    }
  }