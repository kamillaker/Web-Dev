import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  likeCount: number = 0;
  @Output() removeProduct = new EventEmitter<void>();

  share() {
    const message = ` ${this.product.description} - ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

  }
  like(){
    this.likeCount++;
  }
  remove() {
    this.removeProduct.emit();
  }
}
