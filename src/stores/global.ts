import { createStore } from "zustand/vanilla";

type ReviewDialogValue = {
	showReviews: boolean;
};

// Define the type for your state
export type GlobalState = {
	showLoginDialog: boolean;
	// Review Dialog
	reviewDialog: ReviewDialogValue;
};

// Define the actions related to your state
export type GlobalActions = {
	changeLoginDialog: (open: boolean) => void;
	// Review Dialog
	setReviewDialog: (reviewDialog: ReviewDialogValue) => void;
};

// Combine state and actions
export type GlobalStore = GlobalState & GlobalActions;

// Set the default initial state
export const defaultGlobalState: GlobalState = {
	showLoginDialog: false,
	reviewDialog: {
		showReviews: false,
	},
};

// Create the store for managing login dialog state
export const createGlobalStore = (
	initState: GlobalState = defaultGlobalState
) => {
	return createStore<GlobalStore>()((set) => ({
		...initState,
		changeLoginDialog: (open) => set({ showLoginDialog: open }),
		// Action to fetch bookmarks and update the state
		setReviewDialog: (reviewDialog) => set({ reviewDialog }),
	}));
};
