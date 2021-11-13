import { CustomConfigType } from '../types/request'

export const customConfigDefault: CustomConfigType = {
  isNeedToken: false,
  handleToken: undefined,
  isNeedLoading: false,
  isNeedError: true,
  isNeedReRequest: true,
  connectContent: 3,
  isNeedRecordErrorInfo: true,
  isNeedCache: false
}