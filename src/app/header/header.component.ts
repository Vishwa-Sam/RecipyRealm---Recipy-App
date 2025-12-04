import { Component, computed, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DropdownDirective } from '../shared/dropdown.directive';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DropdownDirective,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FormsModule,
  ],
  providers: [DataStorageService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  sectionSelected = output<string>();
  collapsed = true;
  searchInput = '';
  isMenuOpen: boolean = false;
  // isAuthenticated = false;

  private dataStorageService = inject(DataStorageService);
  private authService = inject(AuthService);
  private searchService = inject(SearchService);
  private router = inject(Router);

  isAuthenticated = computed(() => this.authService.user() !== null);

  onSearch(value: string) {
    this.searchService.setQuery(value);
  }

  clearSearch() {
    this.searchInput = '';
    this.searchService.setQuery('');
  }

  onToggel() {
    this.collapsed = !this.collapsed;
  }

  onSelect(section: string) {
    this.sectionSelected.emit(section);
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  onclick() {
    this.router.navigate(['/auth']);
  }

  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onCloseMenu() {
    this.isMenuOpen = false;
  }
}

// ngOnInit() {
//   const subscription = this.authService.user.subscribe(userData => {
//     this.isAuthenticated = !userData ? false : true
//   })
//   this.destroyRef.onDestroy(() => subscription.unsubscribe());
// }
