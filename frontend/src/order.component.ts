import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h1>Checkout</h1>
    <p>One unit of product 42.</p>
    <form [formGroup]="form">
      <label>Customer ID <input type="number" formControlName="customerId"></label>
      <button type="submit" disabled>Place order (not available yet)</button>
    </form>
  `,
})
export class OrderComponent {
  private readonly fb = inject(FormBuilder);
  readonly form = this.fb.nonNullable.group({
    customerId: 1,
    orderItems: this.fb.nonNullable.control([{ productId: 42, quantity: 1 }]),
  });
}
