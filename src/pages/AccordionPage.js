import Accordion from "../components/Accordion";

function AcordionPage() {
  const items = [
    {
      id: "jfhf",
      label: "exemplo 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap i",
    },
    {
      id: "sfsdjkfh",
      label: "exemplo 2",
      content:
        "ever since the 1500s, when an unknown printer took a galley of type",
    },
    {
      id: "dfiasof",
      label: "exemplo 3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee 3 when an unknown printer took a galley of type",
    },
  ];
  return <Accordion items={items} />;
}

export default AcordionPage;
