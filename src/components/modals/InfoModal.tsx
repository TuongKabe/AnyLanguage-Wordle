import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cách chơi" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Hãy đoán TỪ KHÓA trong 8 lượt thử. Sau mỗi lượt, màu của các ô sẽ thay
        đổi để cho bạn biết bạn đã đoán gần đúng hay không so với từ khóa.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Ấ" status="correct" />
        <Cell value="M" />
        <Cell value=" " />
        <Cell value="N" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500">Chữ Ấ đã ở trong vị trí đúng.</p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Ấ" />
        <Cell value="M" />
        <Cell value=" " status="present" />
        <Cell value="Á" />
        <Cell value="P" />
      </div>
      <p className="text-sm text-gray-500">
        Dấu cách có xuất hiện trong từ nhưng nằm sai vị trí.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Ấ" />
        <Cell value="M" />
        <Cell value=" " />
        <Cell value="E" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500">Chữ E không nằm trong từ khóa.</p>
    </BaseModal>
  )
}
