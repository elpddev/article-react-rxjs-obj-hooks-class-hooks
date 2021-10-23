import { Component } from "react";
import { Subject } from "rxjs";
import { Calculator } from "./Calculator";

export class CalculatorManager extends Component {
  /*
   * https://reactjs.org/docs/react-component.html#constructor
   *
   * The constructor for a React component is called before it is mounted
   */
  constructor(props) {
    super(props);
  }

  /*
   * The render method will be called each time an update happens. It
   * returns the component's dom part to be drawn.
   *
   * https://reactjs.org/docs/react-component.html#render
   */
  render() {
    return (
      <Calculator
        onClear={this.onClear}
        onDevision={this.onDevision}
        onMulti={this.onMulti}
        onAdd={this.onAdd}
        onSub={this.onSub}
        onEqual={this.onEqual}
        onNumber={this.onNumber}
        onDot={this.onDot}
        onNumber={this.onNumber}
      />
    );
  }

  /*
   * componentDidMount() is invoked immediately after a component is
   * mounted (inserted into the tree).
   *
   * https://reactjs.org/docs/react-component.html#componentdidmount
   */
  componentDidMount() {
    const {
      onClear,
      onPercentage,
      onDevision,
      onMulti,
      onAdd,
      onSub,
      onEqual,
      onDot,
      onNumber,
    } = handleCalculator();

    this.onClear = onClear;
    this.onPercentage = onPercentage;
    this.onDevision = onDevision;
    this.onMulti = onMulti;
    this.onAdd = onAdd;
    this.onSub = onSub;
    this.onEqual = onEqual;
    this.onDot = onDot;
    this.onNumber = onNumber;
  }

  /*
   * componentDidUpdate() is invoked immediately after updating occurs.
   * This method is not called for the initial render.
   *
   * https://reactjs.org/docs/react-component.html#componentdidupdate
   */
  componentDidUpdate(prevProps, prevState, snapshot) {}

  /*
   * componentWillUnmount() is invoked immediately before a component
   * is unmounted and destroyed.
   *
   * https://reactjs.org/docs/react-component.html#componentwillunmount
   */
  componentWillUnmount() {}
}

function handleSubject() {
  const subject$ = new Subject();
  const onSubject = (val) => subject$.next(val);

  return [subject$, onSubject];
}

function handleCalculator() {
  const [onClearOp$, onClear] = handleSubject();
  const [onPercentage$, onPercentage] = handleSubject();
  const [onDevision$, onDevision] = handleSubject();
  const [onMulti$, onMulti] = handleSubject();
  const [onAdd$, onAdd] = handleSubject();
  const [onSub$, onSub] = handleSubject();
  const [onEqual$, onEqual] = handleSubject();
  const [onDot$, onDot] = handleSubject();
  const [onNumber$, onNumber] = handleSubject();

  return {
    onClear,
    onPercentage,
    onDevision,
    onMulti,
    onAdd,
    onSub,
    onEqual,
  };
}
