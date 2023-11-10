import Button from '@/components/button/Button';
import IconButton from '@/components/button/IconButton';
import { ICONS } from '@/components/icons';
import { buttonProps } from '@/section/VacansySection/VacancyData.props';

export const AddCategoryForm = ({
  button,
  status,
  handleOpenCategory,
}: {
  button: buttonProps;
  status: { [key: string]: string };
  handleOpenCategory: () => void;
}) => {
  return (
    <div className="absolute top-0 left-14 p-4 bg-white rounded-xl border border-main_dark">
      <IconButton label={button.close.label} onClick={handleOpenCategory}>
        <ICONS.CLOSE className={`w-5 stroke-inherit fill-inherit `} />
      </IconButton>

      <input type="text" placeholder={status.placeholder} />
      <Button size="small">{button.ok.text}</Button>
      <Button size="small">{button.cancel.text}</Button>
    </div>
  );
};
