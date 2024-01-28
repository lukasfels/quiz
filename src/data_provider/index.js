import { world } from '@/assets/world.js'
import pokemonList from '@/assets/pokemon.json'
import pokemonCategories from '@/assets/pokemon-categories.json'
import specialCategories from '@/assets/special-categories.json'
import continentCategories from '@/assets/continent-categories.json'

function dataProvider(mode, category) {
    if(category == null || mode == null)
        return

    if (mode == "pokemon") {
        return pokemonList.filter(pokemon => pokemon.generation == category)
    } else {
        return world.filter(item => (item.uno && category == item.continent) || (item.special && category == item.special) || (item.uno && category == 'Welt'))
    }
}

function filterProvider(mode) {
    let data = []

    switch(mode) {
        case 'pokemon':
            data.push(setupData(pokemonCategories))
            break
        case 'capitals':
        case 'flags':
            data.push(setupData(continentCategories))
            data.push(setupData(specialCategories))
            break
        case 'outlines':
        case 'expert':
            data.push(setupData(continentCategories))
            break
        default:
            return
    }

    return data
}

function assetUrl(mode, item) {
    if(item === null) {
        return null 
    }

    let url = import.meta.env.BASE_URL + mode + "/";
    
    switch(mode) {
        case 'flags':
            url += item.code + ".svg"
            break
        case 'outlines':
            url += item.continent + "/" + item.code + ".svg"
            break
        case 'pokemon':
            url += item.generation + "Generation/" + ('000' + item.id).slice(-3) + ".png"
            break
        case 'pokemon_type':
            url += item.toLowerCase() + ".svg"
            break
    }

    return new URL(url, import.meta.url).href
}

function setupData(data) {
    let arrayIndex = 0

    data.categories = data.categories.map((category) => ({ ...category, collapsed: true, index: arrayIndex++ }))

    return data
}

export { dataProvider, assetUrl, filterProvider }