import { create } from 'zustand';

interface UIState {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  isInquiryModalOpen: boolean;
  openInquiryModal: () => void;
  closeInquiryModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  isInquiryModalOpen: false,
  openInquiryModal: () => set({ isInquiryModalOpen: true }),
  closeInquiryModal: () => set({ isInquiryModalOpen: false }),
}));
