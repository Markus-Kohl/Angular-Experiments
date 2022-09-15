import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input() caseSensitive = false;
  @Input() highlightColor = "yellow";
  @Input() focusNextElement = false;

  //@HostBinding("innerHtml")
  @Input()
  public set highlight(searchedText: string) {
    if (searchedText !== this.searchText) {
      this.searchText = searchedText;
      this.highlightText(searchedText);
      if (this.focusNextElement) {
        this.focusMarkElementIn(this.el.nativeElement);
      }
    }
  }

  readonly UNMARK_REGEX: RegExp = /<\/?mark[^>]*>/g;
  readonly CASE_SENSITIVE_MASK = 'g';
  readonly CASE_INSENSITIVE_MASK = 'gi';
  readonly INNER_HTML = 'innerHTML';
  private searchText: string;


  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  highlightText(searchedText: string) {
    let pattern = '';
    if (searchedText) {
      pattern = this.createPattern(searchedText);
    }
    const searchMask = this.caseSensitive ? this.CASE_SENSITIVE_MASK : this.CASE_INSENSITIVE_MASK;
    const regex = new RegExp(pattern, searchMask);
    const unmarkedHTML = this.unmark(this.el.nativeElement.innerHTML);
    if (unmarkedHTML) {
      const html = searchedText ? unmarkedHTML.replace(regex, (match: any) => `<mark tabindex="-1">${match}</mark>`) : unmarkedHTML;
      this.renderer.setProperty(this.el.nativeElement, this.INNER_HTML, html);
    }

  }

  private createPattern(searchText: string): string {
    return searchText.split(' ').filter((t) => {
      return t.length > 0;
    }).join('|');
  }

  private focusMarkElementIn(html: HTMLElement): void {
    const marks = html.getElementsByTagName('mark');
    this.focusFirstMarkElement(marks);
  }

  private focusFirstMarkElement(elements: HTMLCollectionOf<HTMLElement>) {
    if (elements.length > 0) {
      const firstElement = elements[0];
      firstElement.focus();
    }
  }

  private unmark(html: any): any {
    return html.replace(this.UNMARK_REGEX, '');
  }
}
