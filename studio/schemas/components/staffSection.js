export default {
  name: "staffSection",
  title: "Sekcja Nasz Personel",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Podnagłówek',
    },
    {
      name: 'list',
      title: 'Lista',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'staff' },
          options: {
            disableNew: true
          }
        }
      ],
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
    },
  ]
}