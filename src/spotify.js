import React from "react";
let accessToken;
const clientID = "2892cb5a977b4c9493e838405fea6a79";
const redirectUrl = "http://localhost:3000"
const Spotify = {
      getAccessToken (){
        if(accessToken ) return accessToken;

        
            const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
            const expiryTime = window.location.href.match(/expires_in=([^&]*)/);
        
      
      
        if(tokenInURL && expiryTime ){
          accessToken = tokenInURL[1];
          const expiresIn = Number(expiryTime[1]);
      
          if (typeof window !== "undefined"){
              window.setTimeout(() => (accessToken = ""), expiresIn * 1000)
      
              window.history.pushState('Access token', null, '/');
          }
          
          return accessToken;
        } 

          const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`
          
           

        
      
          
        
      
      },
    


search(term){
  accessToken = Spotify.getAccessToken();
  const objectToQueryString = (term) => {
    const keys = Object.keys(term);
    const keyValuePairs = keys.map(key => {
      return encodeURIComponent(key) + '=' +encodeURIComponent(term[key])
    })
    return keyValuePairs.join('&')
  }
  return fetch(`https://api.spotify.com/v1/search?type=track&q=${objectToQueryString()}`, {
    method: "GET",
    headers: {Authorization: `bearer ${accessToken}`},

  }).then(response => response.json()).then(jsonResponse => {
    if(!jsonResponse){
      console.error("Response error")
    }
    
    return jsonResponse.tracks.items.map((t) => ({
      id: t.id,
      name: t.name,
      artist: t.artist[0].name,
      album: t.album.name,
      uri: t.uri,
    }))
  })
}



}

export {Spotify} ;