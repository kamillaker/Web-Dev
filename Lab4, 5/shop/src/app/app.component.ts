import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop';
  categories = ['Electronics', 'Cosmetics', 'Books', 'Clothes'];
  selectedCategory: string | null = null;
  products: any = {
    Electronics: [
      {imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
        price: '270 945 ₸',
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
        description:'Смартфон Apple iPhone 13 128Gb черный',
        rating:'4,7'
      },
      {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/hcf/86042950729758.png?format=gallery-large',
        price: '369 989 ₸',
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-sirenevyi-106363117/?c=750000000',
      description:'Смартфон Apple iPhone 14 128Gb сиреневый',
        rating:'4,7'
      },
      {
        imageUrl:'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-large',
        price:'482 977 ₸',
        link:'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
        description:'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
        rating:'4,7'
      },
      {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-large',
        price: '173 506 ₸',
        link:'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000',
        description: 'Ноутбук Lenovo IdeaPad 3 15.6" / 4 Гб / SSD 256 Гб / Без ОС / 15IGL05 / 81WQ00EMRK',
        rating:'4,7'
      },
      {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
        price: '112 355 ₸',
        link:'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
        description: 'Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
        rating:'4,7'
      }
    ],
    Cosmetics: [
      {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p10/p8b/17764879.jpg?format=gallery-medium',
        price: '598 ₸',
        link: 'https://kaspi.kz/shop/p/fito-kosmetik-bal-zam-malinovyi-sorbet-4-5-g-102666290/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWwQVQiw_hi16jAkn4OghE_eK42SwaRom9jCe3rRuiJHiM36G6-hOhoChtYQAvD_BwE',
        description:'Fito Косметик бальзам Малиновый Сорбет 4.5 г',
        rating:'4.7'
      },
      {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h0d/64527301771294.jpg?format=gallery-large',
        price: '295 ₸',
        link: 'https://kaspi.kz/shop/p/fito-kosmetik-bystryi-effekt-aloe-i-evkalipt-sredstvo-dlja-snjatija-laka-30-ml-105749152/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWwQVQiw_hi16jAkn4OghE_eK42SwaRom9jCe3rRuiJHiM36G6-hOhoChtYQAvD_BwE',
        description:'Fito Косметик Быстрый эффект Алоэ и эвкалипт средство для снятия лака 30 мл',
        rating:'4.7'
      },
      {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hc3/64482660941854.jpg?format=gallery-large',
        price: '1 391 ₸',
        link: 'https://kaspi.kz/shop/p/concept-pro-curls-contouring-creme-krem-100-ml-105533779/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWwQVQiw_hi16jAkn4OghE_eK42SwaRom9jCe3rRuiJHiM36G6-hOhoChtYQAvD_BwE',
        description:'Concept Pro Curls Contouring Creme крем 100 мл',
        rating:'4.7'
      },
      {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hea/hb3/86005196947486.jpg?format=gallery-large',
        price: '5 600 ₸',
        link: 'https://kaspi.kz/shop/p/bioderma-sebium-h2o-250-ml-mitselljarnaja-voda-21900307/?c=750000000&m=Kiwano&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWwQVQiw_hi16jAkn4OghE_eK42SwaRom9jCe3rRuiJHiM36G6-hOhoChtYQAvD_BwE',
        description:'Bioderma Sebium H2O 250 мл мицеллярная вода',
        rating:'4.7'
      },
      {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h60/h8c/86692409049118.jpg?format=gallery-large',
        price: '7 624 ₸',
        link: 'https://kaspi.kz/shop/p/dr-jart-beauty-balm-rejuvenating-silver-label-bb-krem-brightening-40-ml-107386045/?c=750000000&m=Kiwano&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWwQVQiw_hi16jAkn4OghE_eK42SwaRom9jCe3rRuiJHiM36G6-hOhoChtYQAvD_BwE',
        description:'Dr. Jart Beauty Balm Rejuvenating Silver Label BB крем Brightening 40 мл',
        rating:'4.7'
      }
    ],
    Books: [
      {
        imageUrl:'https://resources.cdn-kaspi.kz/img/m/p/h63/h8a/87162104250398.png?format=gallery-large',
        price:'3 639 ₸',
        link:'https://kaspi.kz/shop/p/ker-mbai-s-n-bi-anysh-zh-ne-ylymi-maidan-123730850/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWwQVQiw_hi16jAkn4OghE_eK42SwaRom9jCe3rRuiJHiM36G6-hOhoChtYQAvD_BwE',
        description:'Книга Керімбай С., Нәби Ә.: Қаныш және Ғылыми майдан',
        rating:'4,7'
      },
      {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-large',
        price:'2 200 ₸',
        link:'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWwQVQiw_hi16jAkn4OghE_eK42SwaRom9jCe3rRuiJHiM36G6-hOhoChtYQAvD_BwE',
        description:'Книга Клир Д.: Атомные привычки',
        rating:'4.7',
      },
      {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h88/85767456817182.jpg?format=gallery-large',
        price:'2 400 ₸',
        link:'https://kaspi.kz/shop/p/ker-mbai-s-span-a-beisen-zh-ne-bolmys-103354158/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWwQVQiw_hi16jAkn4OghE_eK42SwaRom9jCe3rRuiJHiM36G6-hOhoChtYQAvD_BwE',
        description:'Книга Керімбай С., Құспан А.: Бейсен және болмыс',
        rating:'4.7',
      },
      {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/h1b/63846893322270.jpg?format=gallery-large',
        price:'1 750 ₸',
        link:'https://kaspi.kz/shop/p/sparks-n-speshi-ljubit--100259730/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWwQVQiw_hi16jAkn4OghE_eK42SwaRom9jCe3rRuiJHiM36G6-hOhoChtYQAvD_BwE',
        description:'Книга Спаркс Н.: Спеши любить',
        rating:'4.7',
      },
      {
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p87/p66/23971679.jpeg?format=gallery-large',
        price:'4 410 ₸',
        link:'https://kaspi.kz/shop/p/aitzhan-yzy-m-te-dess-z-d-alar-128294140/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWwQVQiw_hi16jAkn4OghE_eK42SwaRom9jCe3rRuiJHiM36G6-hOhoChtYQAvD_BwE',
        description:'Книга Айтжанқызы М.: Теңдессіз дұғалар',
        rating:'4.7',
      }
    ],
    Clothes:[
      {
      imageUrl:'https://resources.cdn-kaspi.kz/img/m/p/h6b/h5c/85691775844382.jpg?format=gallery-large',
      price:'4 657 ₸',
      link:'https://kaspi.kz/shop/p/pidzhak-978513-korichnevyi-42-118244514/?c=750000000',
      description:'Пиджак свободного кроя коричневый',
      rating:'4.7'},
      {
        imageUrl:'https://resources.cdn-kaspi.kz/img/m/p/h54/h3e/86391516823582.jpg?format=gallery-large',
        price:'1 045 ₸',
        link:'https://kaspi.kz/shop/p/futbolka-tespe-atk0173-chernyi-56-103963191/?c=750000000',
        description:'Футболка Tespe однотонный черный',
        rating:'4.7'},
      {
        imageUrl:'https://resources.cdn-kaspi.kz/img/m/p/hf8/h74/82933143928862.png?format=gallery-large',
        price:'2 641 ₸',
        link:'https://kaspi.kz/shop/p/longsliv-16494153-chernyi-46-112652213/?c=750000000',
        description:'Лонгслив черный',
        rating:'4.7'},
      {
        imageUrl:'https://resources.cdn-kaspi.kz/img/m/p/hd9/hcb/84374374940702.jpg?format=gallery-large',
        price:'340 ₸',
        link:'https://kaspi.kz/shop/p/termonoski-alaska-alaska-1-para-chernyi-seryi-universal-nyi-114116462/?c=750000000',
        description:'Термоноски Alaska Alaska 1 пара черный, серый универсальный',
        rating:'4.7'},
      {
        imageUrl:'https://resources.cdn-kaspi.kz/img/m/p/h13/hf2/85143754670110.jpg?format=gallery-large',
        price:'3 889 ₸',
        link:'https://kaspi.kz/shop/p/zhilet-shein-239717-chernyi-l-116560081/?c=750000000',
        description:'Жилет SHEIN черный',
        rating:'4.7'}
    ]
  };

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
