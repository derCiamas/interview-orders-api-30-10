import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h1>Checkout</h1>
    <p>One unit of product 42.</p>
    <form [formGroup]="form" (ngSubmit)="submitOrder()">
      <label>Customer ID <input type="number" formControlName="customerId"></label>
      <button type="submit">Place order</button>
      <p role="status">{{ loading ? 'Submitting...' : '' }}</p>
    </form>
  `,
})
export class OrderComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  readonly form = this.fb.nonNullable.group({
    customerId: 1,
    orderItems: this.fb.nonNullable.control([{ productId: 42, quantity: 1 }]),
  });
  loading = false;

  async submitOrder(): Promise<void> {
    this.loading = true;

    try {
      await firstValueFrom(
        this.http.post('/api/orders', this.form.value)
      );
    } finally {
      this.loading = false;
    }
  }
}
