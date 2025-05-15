export interface Post {
  id: number
  title: string
  slug: string
  content: string
  image_url: string
  tag_id: number
  tag_name: string
  author_name: string
  author_avatar: string
  published: boolean
  published_at: string
}

export interface Tag {
  id: number
  name: string
  slug: string
  post_count: number
}

export const mockTags: Tag[] = [
  { id: 1, name: "Wydarzenie", slug: "wydarzenie", post_count: 5 },
  { id: 2, name: "Osiągnięcia", slug: "osiagniecia", post_count: 3 },
  { id: 3, name: "Informacje", slug: "informacje", post_count: 4 },
  { id: 4, name: "Sport", slug: "sport", post_count: 2 },
  { id: 5, name: "Kultura", slug: "kultura", post_count: 1 },
]

export const mockPosts: Post[] = [
  {
    id: 1,
    title: "Narodowe Święto Niepodległości",
    slug: "narodowe-swieto-niepodleglosci",
    content: `# Narodowe Święto Niepodległości w naszej szkole

11 listopada to wyjątkowy dzień dla każdego Polaka. W tym roku, jak co roku, w naszej szkole odbyły się uroczyste obchody Narodowego Święta Niepodległości.

## Program uroczystości

W ramach obchodów zorganizowaliśmy:

- Uroczysty apel z udziałem całej społeczności szkolnej
- Występ chóru szkolnego z repertuarem pieśni patriotycznych
- Konkurs wiedzy o historii Polski
- Wystawę prac plastycznych o tematyce niepodległościowej

## Znaczenie święta

Narodowe Święto Niepodległości to czas refleksji nad historią naszego kraju i wartościami, które doprowadziły do odzyskania przez Polskę niepodległości w 1918 roku. To również okazja do zastanowienia się nad tym, co dla nas oznacza wolność i niepodległość w dzisiejszych czasach.`,
    image_url:
      "/placeholder.svg",
    tag_id: 1,
    tag_name: "Wydarzenie",
    author_name: "Jan Kowalski",
    author_avatar: "/placeholder.svg",
    published: true,
    published_at: "2023-11-11T12:00:00Z",
  },
  {
    id: 2,
    title: "Sukces naszych uczniów w olimpiadzie matematycznej",
    slug: "sukces-naszych-uczniow-w-olimpiadzie-matematycznej",
    content: `# Sukces naszych uczniów w olimpiadzie matematycznej

Z dumą informujemy, że uczniowie naszej szkoły odnieśli znaczący sukces w tegorocznej Olimpiadzie Matematycznej.

## Osiągnięcia

- Jan Nowak (klasa 3A) - I miejsce w finale wojewódzkim
- Anna Kowalska (klasa 2B) - wyróżnienie
- Zespół w składzie: Piotr Wiśniewski, Katarzyna Dąbrowska, Michał Zieliński - III miejsce w kategorii drużynowej

## Przygotowania

Uczniowie przygotowywali się do olimpiady pod kierunkiem mgr Tomasza Lewandowskiego, uczestnicząc w dodatkowych zajęciach koła matematycznego.

Gratulujemy wszystkim uczestnikom i życzymy dalszych sukcesów!`,
    image_url: "/placeholder.svg",
    tag_id: 2,
    tag_name: "Osiągnięcia",
    author_name: "Anna Nowak",
    author_avatar: "/placeholder.svg",
    published: true,
    published_at: "2023-10-15T10:30:00Z",
  },
  {
    id: 3,
    title: "Rozpoczęcie roku szkolnego 2023/2024",
    slug: "rozpoczecie-roku-szkolnego-2023-2024",
    content: `# Rozpoczęcie roku szkolnego 2023/2024

1 września 2023 roku uroczyście rozpoczęliśmy nowy rok szkolny 2023/2024.

## Przebieg uroczystości

Uroczystość rozpoczęła się o godzinie 9:00 na sali gimnastycznej. Po wprowadzeniu sztandaru szkoły i odśpiewaniu hymnu państwowego, głos zabrała Pani Dyrektor, witając wszystkich uczniów, a szczególnie ciepło pierwszoklasistów rozpoczynających naukę w naszej szkole.

## Organizacja roku szkolnego

Podczas uroczystości przedstawiono:
- Kalendarz roku szkolnego
- Nowych nauczycieli dołączających do grona pedagogicznego
- Zmiany w organizacji pracy szkoły

Wszystkim uczniom i nauczycielom życzymy wielu sukcesów w nowym roku szkolnym!`,
    image_url: "/placeholder.svg",
    tag_id: 3,
    tag_name: "Informacje",
    author_name: "Jan Kowalski",
    author_avatar: "/placeholder.svg",
    published: true,
    published_at: "2023-09-01T09:00:00Z",
  },
  {
    id: 4,
    title: "Mistrzostwa szkoły w piłce nożnej",
    slug: "mistrzostwa-szkoly-w-pilce-noznej",
    content: `# Mistrzostwa szkoły w piłce nożnej

W dniach 5-7 października odbyły się mistrzostwa szkoły w piłce nożnej.

## Wyniki rozgrywek

1. miejsce - klasa 4A
2. miejsce - klasa 3C
3. miejsce - klasa 2B

## Najlepsi zawodnicy

- Najlepszy strzelec: Marek Nowak (4A) - 7 goli
- Najlepszy bramkarz: Piotr Kowalski (3C)
- MVP turnieju: Kamil Wiśniewski (4A)

Gratulujemy wszystkim uczestnikom i dziękujemy za sportową rywalizację!`,
    image_url: "/placeholder.svg",
    tag_id: 4,
    tag_name: "Sport",
    author_name: "Robert Woźniak",
    author_avatar: "/placeholder.svg",
    published: true,
    published_at: "2023-10-08T14:00:00Z",
  },
  {
    id: 5,
    title: "Dzień otwarty szkoły",
    slug: "dzien-otwarty-szkoly",
    content: `# Dzień otwarty szkoły

Serdecznie zapraszamy wszystkich zainteresowanych na Dzień Otwarty naszej szkoły, który odbędzie się 15 marca 2024 roku.

## Program

- 10:00-10:30 - Powitanie gości i prezentacja oferty edukacyjnej
- 10:30-12:30 - Zwiedzanie szkoły, prezentacja pracowni i warsztatów
- 12:30-13:30 - Spotkania z nauczycielami poszczególnych przedmiotów
- 13:30-14:30 - Pokazy i warsztaty przygotowane przez uczniów

## Dla kogo?

Dzień otwarty jest skierowany przede wszystkim do uczniów klas ósmych szkół podstawowych oraz ich rodziców, którzy stoją przed wyborem szkoły ponadpodstawowej.

Serdecznie zapraszamy!`,
    image_url: "/placeholder.svg",
    tag_id: 3,
    tag_name: "Informacje",
    author_name: "Anna Nowak",
    author_avatar: "/placeholder.svg",
    published: true,
    published_at: "2024-02-20T11:00:00Z",
  },
  {
    id: 6,
    title: "Koncert chóru szkolnego",
    slug: "koncert-choru-szkolnego",
    content: `# Koncert chóru szkolnego

Z przyjemnością zapraszamy na świąteczny koncert chóru szkolnego, który odbędzie się 18 grudnia o godzinie 17:00 w auli szkolnej.

## Repertuar

W programie znajdą się tradycyjne polskie kolędy oraz międzynarodowe utwory świąteczne. Chór wystąpi pod kierownictwem Pani Agnieszki Szymańskiej.

## Wstęp

Wstęp na koncert jest bezpłatny. Zapraszamy całe rodziny!

Koncert jest doskonałą okazją, aby wprowadzić się w świąteczny nastrój i wspólnie celebrować ten wyjątkowy czas.`,
    image_url: "/placeholder.svg",
    tag_id: 5,
    tag_name: "Kultura",
    author_name: "Magdalena Kamińska",
    author_avatar: "/placeholder.svg",
    published: true,
    published_at: "2023-12-05T09:30:00Z",
  },
  {
    id: 7,
    title: "Wycieczka do Muzeum Narodowego",
    slug: "wycieczka-do-muzeum-narodowego",
    content: `# Wycieczka do Muzeum Narodowego

Klasy 2A i 2B uczestniczyły w wycieczce edukacyjnej do Muzeum Narodowego.

## Przebieg wycieczki

Uczniowie mieli okazję zobaczyć wystawę "Sztuka polska XIX wieku" oraz uczestniczyć w warsztatach artystycznych. Przewodnik muzealny przybliżył młodzieży najważniejsze dzieła polskiego malarstwa, zwracając szczególną uwagę na obrazy Jana Matejki i Józefa Chełmońskiego.

## Wrażenia uczniów

Uczniowie byli pod dużym wrażeniem zbiorów muzeum. Szczególne zainteresowanie wzbudziły wielkoformatowe obrazy historyczne oraz warsztaty, podczas których mogli spróbować swoich sił w tworzeniu własnych dzieł inspirowanych sztuką XIX wieku.

Dziękujemy opiekunom: Pani Annie Kowalskiej i Panu Michałowi Zielińskiemu za organizację tej wartościowej wycieczki.`,
    image_url: "/placeholder.svg",
    tag_id: 1,
    tag_name: "Wydarzenie",
    author_name: "Jan Kowalski",
    author_avatar: "/placeholder.svg",
    published: true,
    published_at: "2023-11-20T15:45:00Z",
  },
]
