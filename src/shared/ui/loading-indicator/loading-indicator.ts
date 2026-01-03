import { Component, inject } from '@angular/core';
import { LoadingService } from '../../data';
import { Spinner } from "../spinner/spinner";

@Component({
  selector: 'app-loading-indicator',
  imports: [Spinner],
  templateUrl: './loading-indicator.html',
  styleUrl: './loading-indicator.scss',
})
export class LoadingIndicator {
  loadingService = inject(LoadingService);
}
