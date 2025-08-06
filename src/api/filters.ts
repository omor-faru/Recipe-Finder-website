export const getCategories = async () => {
    const res = await fetch ("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    const data = await res.json()
    return data.meals.map((mdata:any) =>mdata.strCategory)

}

export const getAreas = async () => {
    const res = await fetch ("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    const data = await res.json()
    return data.meals.map((mdata:any) =>mdata.strArea)

}