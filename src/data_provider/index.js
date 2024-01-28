import world from '@/assets/world.json'
import pokemonList from '@/assets/pokemon.json'
import categories from '@/assets/categories.json'

/**
 * @param {string} mode
 * @param {string} category
 */
function dataProvider(mode, category) {
    if(category == null || mode == null)
        return

    if (mode == "pokemon") {
        return pokemonList.filter(pokemon => pokemon.generation == category)
    } else {
        return world.filter(item => (item.uno && category == item.continent) || (item.special && category == item.special) || (item.uno && category == 'Welt'))
    }
}

/**
 * @param {string} mode
 */
function filterProvider(mode) {
    let data = []

    switch(mode) {
        case 'pokemon':
            data.push(setupData('pokemon'))
            break
        case 'capitals':
        case 'flags':
            data.push(setupData('continent'))
            data.push(setupData('special'))
            break
        case 'outlines':
        case 'expert':
            data.push(setupData('continent'))
            break
    }

    return data
}

/**
 * @param {string} mode
 * @param {string} item
 */
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

/**
 * @param {string} category
 */
function setupData(category) {
    let arrayIndex = 0
    let data = categories[category]
    data.categories = data.categories.map((category) => ({ ...category, collapsed: true, index: arrayIndex++ }))

    return data
}

export { dataProvider, assetUrl, filterProvider }