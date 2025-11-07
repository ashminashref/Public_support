import i18n from 'i18next';
import { initReactI18next} from 'react-i18next';


const resources = {
    en:{
        translation:{
            "community-heading":"You community hub for all local services",
            "Top-Link-1":"Hospitals",
            "Top-Link-2":'Taxi Online',
            "change_language":"MAL"
        }
    },

    mal: {
        translation:{
            "community-heading":"എല്ലാ പ്രാദേശിക സേവനങ്ങൾക്കുമുള്ള നിങ്ങളുടെ കമ്മ്യൂണിറ്റി ഹബ്",
            "Top-Link-1":"ആശുപത്രി",
            "Top-Link-2":"ടാക്സി ഓൺലൈൻ",
            "change_language" : "EN"
        }
    }
}


i18n
.use(initReactI18next)
.init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue : false
    }
})

export default i18n