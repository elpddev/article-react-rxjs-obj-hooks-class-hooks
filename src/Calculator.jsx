import styled from "@emotion/styled";
import { Button } from "./Button";

export function Calculator({
  onClear,
  onPercentage,
  onDevision,
  onMulti,
  onAdd,
  onSub,
  onEqual,
  onNumber,
  onDot,
}) {
  return (
    <MainLayout>
      <ResultPad area="result" />

      <Button area="clear" type="primary" onClick={onClear}>
        C
      </Button>
      <Button area="percentage" type="secondary" onClick={onPercentage}>
        %
      </Button>

      <Button area="devision" type="highlight" onClick={onDevision}>
        /
      </Button>
      <Button area="multi" type="highlight" oonClick={onMulti}>
        *
      </Button>
      <Button area="sub" type="highlight" oonClick={onSub}>
        -
      </Button>
      <Button area="add" type="highlight" oonClick={onAdd}>
        +
      </Button>
      <Button area="equal" type="highlight" oonClick={onEqual}>
        =
      </Button>

      {<NumbersButtons onNumber={onNumber} />}

      <Button area="dot" type="primary" onClick={onDot}>
        .
      </Button>
    </MainLayout>
  );
}

const MainLayout = styled.div({
  display: "grid",
  gridTemplateAreas: `
    "result result result result"
    "clear clear percentage devision"
    "n7 n8 n9 multi"
    "n4 n5 n6 sub"
    "n1 n2 n3 add"
    "n0 n0 dot equal"
  `,
});

const ResultPad = styled.div(({ area }) => {
  return {
    gridArea: area,
    fontSize: "1.6em",
    height: "5em",
    background: "#2B2B2B",
    border: "1px solid #414141",
    boxShadow: "none",
  };
});

function NumbersButtons({ onNumber }) {
  return Array(10)
    .fill(null)
    .map((_, i) => {
      return (
        <Button
          area={`n${i}`}
          type="primary"
          key={i}
          onClick={() => onNumber(i)}
        >
          {i}
        </Button>
      );
    });
}
