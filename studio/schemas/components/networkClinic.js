export default {
  name: 'networkClinic',
  title: 'Placówka w sieci',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa placówki',
      description: 'Np. "Ośrodek TK", "Medicus", "Alma-Med"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'city',
      type: 'string',
      title: 'Miasto',
      description: 'Np. "Turośń Kościelna", "Białystok", "Bielsk Podlaski"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Adres',
      description: 'Pełny adres, np. "ul. Białostocka 7, 18-106 Turośń Kościelna"',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Telefon',
      description: 'Np. "85 650 52 79"',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      description: 'Adres email placówki',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'Logo placówki (SVG lub PNG z przezroczystym tłem)',
      validation: Rule => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Adres strony',
      description: 'URL do strony internetowej placówki, np. "https://osrodektk.pl"',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
      }),
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Aktywna',
      description: 'Czy placówka powinna być widoczna na stronie?',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'city',
      media: 'logo',
    },
  },
}
