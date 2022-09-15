import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {IntegerInputDirective} from "./integer-input.directive";


describe('IntegerInputDirective', () => {
  let testFixture: ComponentFixture<TestComponent>;
  let eventAlphabetic: KeyboardEvent;
  let eventNumeric: KeyboardEvent;
  let eventNegInteger: KeyboardEvent;

  afterEach(() => {
    // @ts-ignore
    testFixture = null;
  });

  beforeEach(async () => {

    eventAlphabetic = new KeyboardEvent('keydown', {key: 'a', cancelable: true});
    eventNumeric = new KeyboardEvent('keydown', {key: '3', cancelable: true});
    eventNegInteger = new KeyboardEvent('keydown', {key: '-', cancelable: true});

    await TestBed.configureTestingModule({
      declarations: [TestComponent, IntegerInputDirective]

    }).compileComponents();

  });

  it('should create an instance', () => {
    testFixture = createTestComponent(getTemplate(false));
    testFixture.detectChanges();
    const input = findEl(testFixture, 'input').nativeElement;
    const directive = new IntegerInputDirective(input);
    expect(directive).toBeTruthy();
  });

  it('should allow number key - input with directive', () => {
    testFixture = createTestComponent(getTemplate(true));
    testFixture.detectChanges();
    const input = findEl(testFixture, 'input').nativeElement;
    dispatchInputEvent(input, eventNumeric);
    expect(input.value).toEqual(eventNumeric.key);
    expect(eventNumeric.defaultPrevented).toBeFalsy();
  });

  it('should prevent key - input with directive', () => {
    testFixture = createTestComponent(getTemplate(true));
    testFixture.detectChanges();
    const input = findEl(testFixture, 'input').nativeElement;
    dispatchInputEvent(input, eventAlphabetic);
    expect(eventAlphabetic.defaultPrevented).toBeTruthy();
  });

  it('should prevent key for neg Integer- input with directive', () => {
    testFixture = createTestComponent(getTemplate(true, true));
    testFixture.detectChanges();
    const input = findEl(testFixture, 'input').nativeElement;
    dispatchInputEvent(input, eventNegInteger);
    expect(eventNegInteger.defaultPrevented).toBeTruthy();
  });

});

@Component({
  selector: 'app-test-cmp',
  template: `
    <form><input id="test-input" type="number" data-testid="input"/></form>`
})
class TestComponent {
}

function createTestComponent(template: string): ComponentFixture<TestComponent> {
  const component = TestBed.overrideComponent(TestComponent, {set: {template}}).createComponent(TestComponent);
  component.detectChanges();
  return component;
}

function getTemplate(applyDirective: boolean, negativeIntegerForbidden?: boolean): string {
  let template: string;
  if (applyDirective) {
    template = '<form><input id="test-input" integerInput  type="number"              [negativeIntegerForbidden]="true" data-testid="input" /></form>';
  } else if (applyDirective && negativeIntegerForbidden) {
    template = '<form><input id="test-input" integerInput  type="number"              [negativeIntegerForbidden]="true" data-testid="input" /></form>';
  } else {
    template = '<form><input id="test-input"  type="number" data-testid="input" /></form>';
  }
  return template;
}

function dispatchInputEvent(
  input: HTMLInputElement,
  event: KeyboardEvent,
): HTMLInputElement {
  input.focus();
  input.value = event.key;
  input.dispatchEvent(event);
  return input;
}

function findEl<T>(
  fixture: ComponentFixture<T>,
  testId: string
): DebugElement {
  return fixture.debugElement.query(
    By.css(`[data-testid="${testId}"]`)
  );
}
