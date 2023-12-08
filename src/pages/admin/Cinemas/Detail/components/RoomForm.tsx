import Title from '@/app/components/Title';
import CRUDButton from '@/pages/admin/components/buttons/CRUDButton';
interface RoomFormProps {
    handleAddRoom: () => void;
    renderDashboard: () => JSX.Element[];
}
function RoomForm({ handleAddRoom, renderDashboard }: RoomFormProps) {
    return (
        <div>
            <div className="flex items-center justify-between w-full my-5">
                <Title>phòng</Title>
                <CRUDButton onClick={() => handleAddRoom()} variant="Add">
                    Thêm phòng
                </CRUDButton>
            </div>
            <div className="grid grid-cols-4 gap-5">{renderDashboard()}</div>
        </div>
    );
}

export default RoomForm;
