import { Component } from '@angular/core';
import { HiglightDirective } from '../CustomDirectives/higlight-directive';

@Component({
  selector: 'app-higlight-product',
  imports: [HiglightDirective],
  templateUrl: './higlight-product.html',
  styleUrl: './higlight-product.scss',
})
export class HiglightProduct {
 productDetails = ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quisquam nostrum, deserunt voluptas sunt saepe nemo. Quod unde sint ea praesentium, officia omnis, veniam delectus, doloremque minima deleniti repellat totam',
  'olor sit amet consectetur adipisicing elit. Incidunt quisquam nostrum, deserunt voluptas sunt saepe',
  'olor sit amet consectetur adipisicing elit. Incidunt qu',
  'om nostrum, deserunt voluptas sunt saepe'
 ]
}
