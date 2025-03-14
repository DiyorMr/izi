import "./Accordion.scss";

const Accordion = () => {
  const accordionData = [
    {
      id: "rd1",
      label: "LoremLoremLoremLoremLorem?",
      content: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem",
    },
    {
      id: "rd2",
      label: "LoremLoremLoremLoremLorem?",
      content: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem",
    },
    {
      id: "rd3",
      label: "LoremLoremLoremLoremLorem?",
      content: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem",
    },
    {
      id: "rd4",
      label: "LoremLoremLoremLoremLorem?",
      content: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem",
    },
    {
      id: "rd5",
      label: "LoremLoremLoremLoremLorem?",
      content: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem",
    },
    {
      id: "rd6",
      label: "LoremLoremLoremLoremLorem?",
      content:
        "LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLorem",
    },
  ];

  return (
    <section className="accordion">
      {accordionData.map((item) => (
        <div className="tab">
          <input type="radio" name="accordion-2" id={item.id} />
          <label htmlFor={item.id} className="tab__label">
            {item.label}
          </label>
          <div className="tab__content">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
