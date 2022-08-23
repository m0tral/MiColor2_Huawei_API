/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 export interface SendData {
  /**
   * Download token, which is used to obtain the download status.
   */
  data: string;
}
 
/**
* Called when downloading fails.
*/
 export interface InterconnectAPI {
	static send(options: {
		
		data: SendData;
		/**
		* Called when downloading fails.
		*/
		success?: (data: any) => void;

		/**
		* Called when downloading fails.
		*/
		fail?: (data: any, code: number) => void;

		/**
		 * Called when the execution is completed.
		 */
		complete?: () => void;		
	}): void;
}

/**
 * @Syscap SysCap.ACE.UIEngineLite
 */
export default class Interconnect {
	/**
	* get interconnect instance
	*/
	static instance(): InterconnectAPI;
}