
import { AppState } from "../AppState.js";
import { Artwork } from "../models/Artwork.js";
import { api } from "./AxiosService.js";



class ArtworkService {
    async getArtwork(){
        const response = await api.get('api/artworks')
        console.log('Getting Artwork 🖼', response.data);
        const artwork = response.data.artworks.map(artworkData => new Artwork(artworkData))
        console.log('🎨 👨‍🎨', artwork);
        AppState.artworks = artwork
    }
}

export const artworkService = new ArtworkService()