import { SubmitButton } from '@/app/submit-button';
import { findToDos, createToDo } from '../form2/actions';

export default async function Home() {
  return (
    <form action={createToDo}>
      <input type='text' name='field-name' />
      <SubmitButton />
    </form>
  );
}
