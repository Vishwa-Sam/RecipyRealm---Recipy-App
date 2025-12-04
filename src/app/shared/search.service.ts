import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {
  searchQuery = signal(''); // shared state
  isLoading = signal<boolean>(false);

  setQuery(value: string) {// update the signal
    this.isLoading.set(true);

    setTimeout(() => {
      this.searchQuery.set(value);
      this.isLoading.set(false);
    }, 1000);
  }
}
