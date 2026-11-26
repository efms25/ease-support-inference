import type { AiProviderOptions } from "./AiProviderOptions.type.ts";
import type { AiProviderResponse } from "./AiProviderResponse.type.ts";

export interface AiProvider {
    generate(message: string[], options?: AiProviderOptions): Promise<AiProviderResponse>
}