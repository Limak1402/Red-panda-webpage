import maps from './Assets/Ailurus_fulgens_distribution_map.png'
import name from './Assets/red-panda-1851661_1280.avif'
import life from './Assets/red-panda-1194504_1280.avif'

export const INFORMATIONS = [
    {
        title: 'Nazwa',
        img: name,
        description: 'Na terenach występowania pandki rudej w potocznym języku chińskim jest ona nazywana hǔo hú (火狐), co dosłownie oznacza „ognisty lis” (ta nazwa jest stosowana także na określenie zwykłego lisa).',
        alt_text: 'Nazwa'
    },

    {
        title: 'Tryb życia',
        img: life,
        description: 'Pandki rude prowadzą nocny tryb życia. Większość dnia spędzają na drzewach, gdzie budują gniazda z gałęzi i liści. Są samotnikami i spotykają się tylko w celu rozmnażania lub w celu obrony terytorium.',
        alt_text: 'Tryb życia'
    },

    {
        title: 'Mapa występowania',
        img: maps,
        description: 'Zasięg występowania pandki obejmuje tereny południowych Chin, północno-wschodnich Indii, Nepal i północną Mjanmę.',
        alt_text: 'Miejsce występowania'
    },
]