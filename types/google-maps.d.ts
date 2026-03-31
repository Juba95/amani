// Minimal type declarations for Google Maps Places Autocomplete
declare namespace google {
  namespace maps {
    namespace places {
      class Autocomplete {
        constructor(
          input: HTMLInputElement,
          opts?: AutocompleteOptions
        );
        addListener(event: string, handler: () => void): void;
        getPlace(): PlaceResult;
      }
      interface AutocompleteOptions {
        types?: string[];
        componentRestrictions?: { country: string | string[] };
        fields?: string[];
      }
      interface PlaceResult {
        formatted_address?: string;
        name?: string;
        geometry?: object;
      }
    }
  }
}

interface Window {
  google: typeof google;
}
