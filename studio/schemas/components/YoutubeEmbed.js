export default {
  name: "YoutubeEmbed",
  title: "Film z YouTube",
  type: "object",
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'ID filmu z serwisu YouTube',
      description: 'ID filmu, to końcówka adresu URL filmu, który udostępniasz na tym serwisie. Po klknięciu w "Udostepjij" pod filmem w YouTube, ukazuję się link np. (https://youtu.be/gLEmFUHh_84). W tym przypadku ID to: "gLEmFUHh_84"'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Tekst alternatywny',
      description: 'Tekst alternatywny dla filmu, to tekst, który opisuję co znajduję się na filmie. Jest pomocny dla osób z mniejszą dostępnością.'
    },
  ],
  preview: {
    select: {
      title: 'id',
      subtitle: 'alt',
    },
  }
}