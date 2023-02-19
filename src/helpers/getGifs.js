export const getGifs= async(category)=>{
    const key = 'aT16wLJDVvMwwIXaaw58o8aepG89NZ4O'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}2&limit=20`
    const resp = await fetch(url)
    const {data} = await resp.json()
    // formateando la data
    const gifs = data.map(img =>(
        {
          id : img.id,
          title: img.title,
          url:img.images.downsized_medium.url
        }
      ))
      // console.log(gifs)
      return gifs
  }