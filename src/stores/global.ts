import { createStore } from "zustand/vanilla";
import { ToolResponse, BookmarkResponse, ReviewResponse } from "@/api/api";
import { request } from "@/api/request";

type ReviewDialogValue = {
	showReviews: boolean;
	tool: ToolResponse | null;
};

// Define the type for your state
export type GlobalState = {
	showLoginDialog: boolean;
	bookmarks: BookmarkResponse[]; // Add bookmarks to the state
	// Review Dialog
	reviewDialog: ReviewDialogValue;
};

// Define the actions related to your state
export type GlobalActions = {
	changeLoginDialog: (open: boolean) => void;
	updateBookmarks: (bookmarks: BookmarkResponse[]) => void; // Action to update bookmarks
	fetchBookmarks: () => Promise<void>; // Action to fetch bookmarks

	// Review Dialog
	setReviewDialog: (reviewDialog: ReviewDialogValue) => void;
};

// Combine state and actions
export type GlobalStore = GlobalState & GlobalActions;

// Set the default initial state
export const defaultGlobalState: GlobalState = {
	showLoginDialog: false,
	bookmarks: [], // Initial empty state for bookmarks
	reviewDialog: {
		showReviews: false,
		tool: null,
	},
};

// Create the store for managing login dialog state
export const createGlobalStore = (
	initState: GlobalState = defaultGlobalState
) => {
	return createStore<GlobalStore>()((set) => ({
		...initState,
		changeLoginDialog: (open) => set({ showLoginDialog: open }),
		// Action to update bookmarks
		updateBookmarks: (bookmarks) => set({ bookmarks }),
		// Action to fetch bookmarks and update the state
		fetchBookmarks: async () => {
			try {
				const response = await request.api.bookmarksGetBookmarks();
				set({ bookmarks: response.data?.data || [] }); // Update bookmarks in the store
			} catch (error) {
				console.error("Error fetching bookmarks:", error);
			}
		},
		setReviewDialog: (reviewDialog) => set({ reviewDialog }),
	}));
};
